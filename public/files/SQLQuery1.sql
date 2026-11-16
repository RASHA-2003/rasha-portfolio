use AlRayan_Admissions_DB


ALTER TABLE student_performance ADD PRIMARY KEY (StudentID);

CREATE TABLE Majors (
    MajorID INT PRIMARY KEY,
    MajorName NVARCHAR(100) NOT NULL,
    College NVARCHAR(100) NOT NULL
);

INSERT INTO Majors VALUES 
(1, N'الطب البشري', N'كلية الطب'),
(2, N'التمريض', N'كلية العلوم الصحية'),
(3, N'الصيدلة الإكلينيكية', N'كلية الصيدلة'),
(4, N'المختبرات الطبية', N'كلية العلوم الصحية');

CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY IDENTITY(1,1),
    StudentID TINYINT FOREIGN KEY REFERENCES student_performance(StudentID),
    MajorID INT FOREIGN KEY REFERENCES Majors(MajorID),
    Semester NVARCHAR(50),
    AdmissionStatus NVARCHAR(30)
);

INSERT INTO Enrollments (StudentID, MajorID, Semester, AdmissionStatus) VALUES
(1, 1, N'الفصل الأول 1448', N'مقبول'),
(2, 2, N'الفصل الأول 1448', N'مقبول'),
(3, 4, N'الفصل الأول 1448', N'قيد المراجعة'),
(4, 1, N'الفصل الأول 1448', N'مقبول'),
(5, 3, N'الفصل الأول 1448', N'مقبول'),
(6, 3, N'الفصل الثاني 1448', N'مقبول'),
(7, 2, N'الفصل الثاني 1448', N'مرفوض'),
(8, 4, N'الفصل الثاني 1448', N'مقبول'),
(9, 1, N'الفصل الثاني 1448', N'مقبول'),
(10, 2, N'الفصل الثاني 1448', N'مقبول');

----------------------------------------------
--عرض بيانات الطلاب مع ترتيب   للنتائج

select * from student_performance
order by FinalGrade desc;


--------------------------------
select  Name, AttendanceRate, FinalGrade
from student_performance
WHERE FinalGrade >= 85 AND AttendanceRate >= 85
ORDER BY FinalGrade DESC;


-----------------
SELECT Name,FinalGrade,
case
when FinalGrade >= 95 then 'ممتاز مرتفع'
when FinalGrade >= 90 then 'ممتاز'
when FinalGrade >= 85 then 'جيد جدا مرتفع'
when FinalGrade >= 80 then 'جيد جد'
when FinalGrade >= 75 then' جيد مرتفع'
when FinalGrade >= 70 then 'جيد '
when FinalGrade >= 65 then 'مقبول مرتفع'
when FinalGrade >= 60 then 'مقبول '
else 'راسب'
end AS PerformanceLevel
FROM student_performance;

----------------------

SELECT
    COUNT(*) AS TotalStudents,
    AVG(FinalGrade) AS AverageGrade,
    MAX(FinalGrade) AS HighestGrade,
    MIN(FinalGrade) AS LowestGrade,
    AVG(AttendanceRate) AS AverageAttendance
FROM student_performance;


-------------------

SELECT Gender,count(*) as TotalStudents,
avg(FinalGrade) as AverageGrade,
avg(AttendanceRate) asAverageAttendance
FROM student_performance
group by Gender;


--------
select M.MajorName,M.College ,count(E.StudentID) as TotalStudents

from Majors AS M
left join Enrollments as E
on M.MajorID=E.MajorID
group by M.MajorName,M.College
order by TotalStudents desc;
------

SELECT *
FROM student_performance
WHERE StudentID IS NULL
   OR Name IS NULL
   OR AttendanceRate NOT BETWEEN 0 AND 100
   OR FinalGrade NOT BETWEEN 0 AND 100
   OR PreviousGrade NOT BETWEEN 0 AND 100;