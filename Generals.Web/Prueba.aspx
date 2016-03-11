<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Prueba.aspx.cs" Inherits="Generals.Web.Prueba" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
   
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <script src="Scripts/angular-mocks.js"></script>
    <script src="Scripts/angular.js"></script>
    <script src="Scripts/angular.min.js"></script>
    <div class="container" ng-controller="StudentController" ng-app="App">
 
        <table class="table table-striped table-hover table-condensed">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Credit</th>
                    <th>Semester</th>
 
                </tr>
            </thead>
 
            <tbody><tr ng-repeat="student in studentInfo">
                <td>{{student.id}}
                </td>
                <td>{{student.name}}
                </td>
                <td>{{student.credit}}
                </td>
                <td>{{student.semester}}
                </td>
            </tr>
        </tbody></table>
    </div>
    
</asp:Content>
